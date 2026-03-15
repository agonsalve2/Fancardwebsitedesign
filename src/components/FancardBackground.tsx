import cascaisFancard1 from 'figma:asset/e9796bab216c855789eaba4da1b5e2aae0cdc5ee.png';
import cascaisFancard2 from 'figma:asset/6a560fc3086fe4114b4ea82503ed3a06ef7e3d6f.png';
import cascaisFancard3 from 'figma:asset/ee57e1d947aacfbcbe92a9ee9d8e52963ddfe862.png';
import sportworxFancard1 from 'figma:asset/84c64f6033bda7062a46815302b12955b80c4967.png';
import sportworxFancard2 from 'figma:asset/bd1d33cc6e557592044c709b15d115806d48b6f1.png';
import sportworxFancard3 from 'figma:asset/738bc0483b8952cca79650579430057449dff8df.png';
import lafFancard1 from 'figma:asset/ca0e056b2fdf8800c98953657932d5621bae45b2.png';
import lafFancard2 from 'figma:asset/8d65b1cc55257b5972296c8edbf1947171afbd46.png';
import lafFancard3 from 'figma:asset/b080cb6a7a16438266b0abd5a6ac810b4e27fa7e.png';
import ballerMarketPromo1 from 'figma:asset/953729f053e165eb4313dee5ba93b31eac681909.png';
import ballerMarketPromo2 from 'figma:asset/948086022b07218b5b69aa0554c5b0dfabce40f2.png';
import fancardExample from '../assets/fancard-example.jpg';

const allCardImages = [
  cascaisFancard1, sportworxFancard1, lafFancard1, fancardExample, ballerMarketPromo1,
  cascaisFancard2, sportworxFancard2, lafFancard2, ballerMarketPromo2, cascaisFancard3,
  sportworxFancard3, lafFancard3, cascaisFancard1, fancardExample, sportworxFancard1,
  lafFancard1, ballerMarketPromo1, cascaisFancard2, sportworxFancard2, lafFancard2,
  ballerMarketPromo2, cascaisFancard3, sportworxFancard3, lafFancard3, fancardExample,
  cascaisFancard1, sportworxFancard1, lafFancard1, cascaisFancard2, ballerMarketPromo1,
];

const cardRotations = [
  -3, 2, -1, 3, -2, 1, -3, 2, -1, 3,
  2, -2, 1, -3, 2, -1, 3, -2, 1, -3,
  -1, 3, -2, 1, -3, 2, -1, 3, -2, 1,
];

export { allCardImages, cardRotations };

export function FancardBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      <div
        className="grid gap-3 sm:gap-4 p-2"
        style={{
          gridTemplateColumns: 'repeat(6, 1fr)',
          width: '110%',
          marginLeft: '-5%',
        }}
      >
        {allCardImages.map((src, i) => (
          <div
            key={i}
            className="rounded-xl sm:rounded-2xl overflow-hidden"
            style={{ rotate: `${cardRotations[i]}deg` }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-auto block rounded-xl sm:rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* White overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255,255,255,0.9)' }} />
    </div>
  );
}
