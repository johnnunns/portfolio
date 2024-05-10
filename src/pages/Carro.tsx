import { Box, Link, Typography } from '@mui/material';
import Carousel from 'nuka-carousel';
import Carro1 from '../Assets/carro-1.png';
import Carro2 from '../Assets/carro-2.png';
import Carro3 from '../Assets/carro-3.png';
import Carro4 from '../Assets/carro-4.png';
import Carro5 from '../Assets/carro-5.png';
import Carro6 from '../Assets/carro-6.png';
import Carro7 from '../Assets/carro-7.png';
import Carro8 from '../Assets/carro-8.png';

const images = [
  {
    name: 'Directory',
    url: Carro1,
    description:
      'Home page of directory where a retailer can see featured brands, recommended brands/products, and favorited brands/products.',
  },
  {
    name: 'Directory',
    url: Carro2,
    description:
      'Product view in the directory where user can search, filter, or choose a category to narrow down product results.',
  },
  {
    name: 'Directory',
    url: Carro3,
    description:
      'Brand page view in the directory where user can search, filter, or choose a category to narrow down product results supplied by this brand.',
  },
  {
    name: 'Partners',
    url: Carro4,
    description:
      'Partner page for Retailers/Suppliers to see their current partners. Additional details displayed via accordion style row expansion.',
  },
  {
    name: 'Requests',
    url: Carro5,
    description:
      'Requests page for Retailers/Suppliers to see incoming requests. Additional details displayed via accordion style row expansion.',
  },
  {
    name: 'Product Control System',
    url: Carro6,
    description:
      'Supplier page to allow them to update pricing, revenue splits, sales events for their retailer partners selling added products.',
  },
  {
    name: 'Reporting',
    url: Carro7,
    description:
      'Reporting tool built for Retailers/Suppliers to visualize their KPIs.',
  },
  {
    name: 'Settings',
    url: Carro8,
    description:
      'Settings page allowing for updates to general, retailer, supplier, or subscription related Carro settings.',
  },
];

const Carro: React.FC = () => {
  return (
    <Box maxWidth="1100px" margin="0 auto">
      <Box mb={1}>
        <Typography variant="h1">Carro</Typography>
        <Typography>
          Carro is an application on Shopify that allows supplier and retailers
          to connect via our platform. A partnership allows retailers to sell
          supplier's products on their store. The revenue splits between
          partners and other logistics are handled by Carro. Reached Series B
          phase with a valuation of $100m. For more information on Carro, you
          can go&nbsp;
          <Link href="https://getcarro.com" target="_blank">
            here
          </Link>
          .
          <br />
          <br />
          Below are some screenshots of the areas in the app I worked on
          directly:
        </Typography>
      </Box>
      <Box pb={8}>
        <Carousel
          renderBottomCenterControls={({ currentSlide }) => {
            return (
              <Typography sx={{ textAlign: 'center' }}>
                {images[currentSlide].description}
              </Typography>
            );
          }}
        >
          {images.map((image) => (
            <img
              key={image.name}
              height={700}
              width={1100}
              src={image.url}
              alt="test"
            />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Carro;
