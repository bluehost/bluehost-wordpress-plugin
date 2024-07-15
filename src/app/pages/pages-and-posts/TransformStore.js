import { Button, Card, Title } from "@newfold/ui-component-library";
import { ReactComponent as TransformLogo } from 'Assets/svg/TransformStore.svg';

const TransformStore = () => {

  return (
    <Card
      className="wppbh-app-bookings nfd-border-0 nfd-border-t md:nfd-border-t-0 nfd-shadow-none hover:nfd-bg-[#F2F9FE]"
      style={{
        borderRadius: 0,
      }}
    >
      <Card.Content>
        <TransformLogo />
        <Title size="4" className="nfd-leading-normal nfd-my-4">
          {__('Transform your store!', 'wp-plugin-bluehost')}
        </Title>
        <p>
          {__(
            'Our eCommerce bundle includes a comprehensive suite of advanced tools designed to boost the performance of your WooCommerce store.',
            'wp-plugin-bluehost'
          )}
        </p>
      </Card.Content>
      <div className="nfd-flex nfd-justify-end nfd-gap-6 nfd-items-center">
        <a href="admin.php?page=bluehost#/marketplace/product/6049dddb-1303-4c41-b3c0-242881697860">
          <Button variant="secondary">{__('Learn More', 'wp-plugin-bluehost')}</Button>
        </a>
      </div>
    </Card>
  );

}

export default TransformStore;