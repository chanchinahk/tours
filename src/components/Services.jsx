import Title from "./Title";
import { services } from "../data";
import Service from "./Service";
const Services = () => {
  return (
    <main className='services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='services-content'>
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
    </main>
  );
};

export default Services;