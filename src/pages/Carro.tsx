import { Box, Link, Typography } from '@mui/material';
import Carousel from 'nuka-carousel';
import Carro1 from '../Assets/carro-1.png';
import Carro3 from '../Assets/carro-3.png';
import Carro4 from '../Assets/carro-4.png';

const images = [
  {
    name: 'Directory',
    url: Carro1,
    description:
      'Supplier page where retailers can partner with brand and add their products.',
  },
  {
    name: 'Reporting',
    url: Carro3,
    description:
      'Reporting tool built for Retailers/Suppliers to see their KPIs.',
  },
  {
    name: 'Requests',
    url: Carro4,
    description:
      'Requests page for Retailers/Suppliers to see incoming requests. Additional details displayed via accordion style row expansion.',
  },
];

const Carro: React.FC = () => {
  return (
    <Box maxWidth="1000px" margin="0 auto">
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
          Below are some screenshots of portions of the app I worked on
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
              height={600}
              width={1000}
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
