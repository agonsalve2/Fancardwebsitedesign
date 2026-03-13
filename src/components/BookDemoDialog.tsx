import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface BookDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDemoDialog({ open, onOpenChange }: BookDemoDialogProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    venueName: '',
    interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for SheetDB with exact column names from spreadsheet
      const submissionData = {
        data: {
          'Timestamp': new Date().toLocaleString('en-US', { 
            timeZone: 'America/New_York',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          }),
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Work Email': formData.email,
          'Phone Number': formData.phone,
          'Stadium / Venue Name': formData.venueName,
          "I'm interested in": formData.interest
        }
      };

      // Submit to Google Sheet via SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/ma1hpjen4q1ke', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const responseData = await response.json();
      
      if (!response.ok) {
        console.error('API Error:', responseData);
        throw new Error(responseData.message || 'Failed to submit form');
      }

      // Show success toast
      toast.success('Demo request received!', {
        description: "We'll contact you within 24 hours to schedule your personalized demo."
      });
      
      // Reset form and close dialog
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        venueName: '',
        interest: ''
      });
      onOpenChange(false);
    } catch (error) {
      // Show error toast
      toast.error('Submission failed', {
        description: 'There was a problem submitting your request. Please try again or contact us directly.'
      });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white border-gray-200 text-gray-900 max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl sm:text-3xl text-gray-900">
            Book Your Demo
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            Fill out the form below and we'll contact you within 24 hours to schedule your personalized demo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#BEF264] focus:ring-[#BEF264]/20"
                placeholder="John"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#BEF264] focus:ring-[#BEF264]/20"
                placeholder="Smith"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">Work Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#BEF264] focus:ring-[#BEF264]/20"
              placeholder="john@stadium.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#BEF264] focus:ring-[#BEF264]/20"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="venueName" className="text-gray-700 font-medium">Stadium / Venue Name *</Label>
            <Input
              id="venueName"
              value={formData.venueName}
              onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
              className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#BEF264] focus:ring-[#BEF264]/20"
              placeholder="Your Stadium or Arena"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="interest" className="text-gray-700 font-medium">I'm interested in... *</Label>
            <Select
              value={formData.interest}
              onValueChange={(value) => setFormData({ ...formData, interest: value })}
              required
            >
              <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900 focus:border-[#BEF264] focus:ring-[#BEF264]/20">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200">
                <SelectItem value="demo">Scheduling a Demo</SelectItem>
                <SelectItem value="pricing">Pricing Information</SelectItem>
                <SelectItem value="integration">Venue Integration</SelectItem>
                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                <SelectItem value="other">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 space-y-4">
            <Button 
              type="submit"
              size="lg" 
              disabled={isSubmitting}
              className="w-full bg-[#BEF264] hover:bg-[#9EF01A] text-black border-0 py-7 text-lg font-bold group shadow-2xl shadow-[#BEF264]/30 hover:shadow-[#BEF264]/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? 'Submitting...' : 'Request Demo'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            <p className="text-gray-500 text-xs text-center">
              By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}