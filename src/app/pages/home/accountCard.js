import { Card, Title } from "@yoast/ui-library";
import {
  BillingIcon,
  MailIcon,
  ProductsIcon,
  SecurityIcon,
  UserIcon,
  ValidationIcon,
} from "../../components/icons";
import { getPlatformBaseUrl, getPlatformPathUrl } from "../../util/helpers";

const isJarvis = window.WPPB.env.isJarvis;

const base = [
  {
    icon: UserIcon,
    id: "account_link",
    href: getPlatformPathUrl("home", "app"),
    label: __("Control Panel", "bluehost-wordpress-plugin"),
    color: "yst-fill-gray",
  },
  {
    icon: BillingIcon,
    id: "billing_link",
    href: getPlatformPathUrl("renewal-center", "account_center#billing"),
    label: __("Billing", "bluehost-wordpress-plugin"),
    color: "yst-fill-primary",
  },
  {
    icon: ProductsIcon,
    id: "products_link",
    href: getPlatformPathUrl("market-place", "account_center#products"),
    label: __("Products", "bluehost-wordpress-plugin"),
    color: "yst-fill-primary-dark",
  },
  {
    icon: MailIcon,
    id: "mail_link",
    href: getPlatformPathUrl("home", "app#/email-office"),
    label: __("Mail & Office", "bluehost-wordpress-plugin"),
    color: "yst-fill-[#5b5b5b]",
  },
  {
    icon: SecurityIcon,
    id: "security_link",
    href: getPlatformPathUrl("security", "account_center#security"),
    label: __("Security", "bluehost-wordpress-plugin"),
    color: "yst-fill-[#17b212]",
  },
  {
    icon: ValidationIcon,
    id: "validation_token_link",
    href: isJarvis
      ? getPlatformPathUrl("account-center")
      : getPlatformBaseUrl("/cgi/token"),
    label: __("Validation Token", "bluehost-wordpress-plugin"),
    color: "yst-fill-[#f89c24]",
  },
];

export function AccountCard(props) {
  return (
    <Card>
      <Card.Content>
        <Title size={2}>Bluehost Account</Title>
        <ul className="yst-grid yst-grid-cols-3 yst-h-full yst-mt-3">
          {base.map((link) => (
            <li
              key={link.id}
              className="yst-flex yst-items-center yst-justify-center"
            >
              <a
                href={link.href}
                className={
                  "yst-flex yst-flex-col yst-items-center yst-text-center yst-text-primary"
                }
              >
                <link.icon className={"yst-w-12 " + link.color} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Card.Content>
    </Card>
  );
}
