import { Button, Card, Title } from '@newfold/ui-component-library';

const BookingAndAppointments = () => {
  return <Card style={{
    borderRadius: 0,
    borderTop: 0
  }}>
    <Card.Content>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F2F9FE" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9933 14.8834C20.9355 14.386 20.5128 14 20 14C19.4477 14 19 14.4477 19 15V16H17C15.3431 16 14 17.3431 14 19V31C14 32.6569 15.3431 34 17 34H31C32.6569 34 34 32.6569 34 31V19C34 17.3431 32.6569 16 31 16H29V15L28.9933 14.8834C28.9355 14.386 28.5128 14 28 14C27.4477 14 27 14.4477 27 15V16H21V15L20.9933 14.8834ZM19 18V19L19.0067 19.1166C19.0645 19.614 19.4872 20 20 20C20.5523 20 21 19.5523 21 19V18H27V19L27.0067 19.1166C27.0645 19.614 27.4872 20 28 20C28.5523 20 29 19.5523 29 19V18H31C31.5523 18 32 18.4477 32 19V31C32 31.5523 31.5523 32 31 32H17C16.4477 32 16 31.5523 16 31V19C16 18.4477 16.4477 18 17 18H19ZM29 22C29.5523 22 30 22.4477 30 23C30 23.5128 29.614 23.9355 29.1166 23.9933L29 24H19C18.4477 24 18 23.5523 18 23C18 22.4872 18.386 22.0645 18.8834 22.0067L19 22H29Z" fill="#2D689C" />
      </svg>
      <Title size="4" className="nfd-leading-normal nfd-my-4">
        {__('Bookings & Appointments', 'wp-plugin-bluehost')}
      </Title>
      <p>{__('Add your list of services, setup a booking calendar, and edit your bookings form.', 'wp-plugin-bluehost')}</p>
    </Card.Content>
    <div className="nfd-flex nfd-justify-end nfd-gap-6 nfd-items-center">
      <a>{__('view all', 'wp-plugin-bluehost')}</a>
      <Button>{__('Add New', 'wp-plugin-bluehost')}</Button>
    </div>
  </Card >;
};

export default BookingAndAppointments;
