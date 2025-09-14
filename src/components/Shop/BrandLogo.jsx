// components/BrandLogos.jsx
import React from 'react';
// import './brandLogo.css';
import tonicClean from '../../assets/shop/brands/Tropiclean-Logo.png';
import monge from '../../assets/shop/brands/Monge-Logo.png';
import urineOff from '../../assets/shop/brands/Urineoff-Logo.png';
import vetPlus from '../../assets/shop/brands/Vet-Logo.png';
import gemon from '../../assets/shop/brands/Gemon-Logo.png'; 
import zenith from '../../assets/shop/brands/Zenith-Logo.png';
import royalCanin from '../../assets/shop/brands/Royalcanin-Logo.png';
import meo from '../../assets/shop/brands/Meo-Logo.png';

const brands = [
    { img: tonicClean, alt: 'Tonic Clean' },
  { img: monge, alt: 'Monge' },
  { img: urineOff, alt: 'Urine Off' },
  { img: vetPlus, alt: 'Vet Plus' },
  { img: gemon, alt: 'Gemon' },
  { img: zenith, alt: 'Zenith' },
  { img: royalCanin, alt: 'Royal Canin' },
  { img: meo, alt: 'Me-O' },
];

const BrandLogo = () => {
    return (
        <div className="py-4">
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    {brands.map((brand, idx) => (
                        <div key={idx} className="col-3 col-sm-1 col-md-1 text-center mb-3">
                            <img
                                src={brand.img}
                                alt={`Brand ${idx}`}
                                className="img-fluid brand-logo"
                                style={{
                                    height: '48px',
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;
