import {
  CpuChipIcon,
  CreditCardIcon,
  EnvelopeIcon,
  GiftIcon,
  IdentificationIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { Card, Title } from "@yoast/ui-library";
import { addUtmParams, getPlatformBaseUrl, getPlatformPathUrl } from "../../util/helpers";
import classNames from "classnames";

const isJarvis = window.WPPBH.env.isJarvis;

const base = [
  {
    icon: CpuChipIcon,
    id: "account_link",
    href: addUtmParams( getPlatformPathUrl("home", "app") ),
    label: __("Control Panel", "bluehost-wordpress-plugin"),
    color: "yst-fill-gray",
  },
  {
    icon: GiftIcon,
    id: "products_link",
    href: addUtmParams( getPlatformPathUrl("market-place", "account_center#products") ),
    label: __("Products", "bluehost-wordpress-plugin"),
    color: "yst-fill-primary-dark",
  },
  {
    icon: CreditCardIcon,
    id: "billing_link",
    href: addUtmParams( getPlatformPathUrl("renewal-center", "account_center#billing") ),
    label: __("Billing", "bluehost-wordpress-plugin"),
    color: "yst-fill-primary",
  },
  {
    icon: EnvelopeIcon,
    id: "mail_link",
    href: addUtmParams( getPlatformPathUrl("home", "app#/email-office") ),
    label: __("Mail & Office", "bluehost-wordpress-plugin"),
    color: "yst-fill-[#5b5b5b]",
  },
  {
    icon: ShieldCheckIcon,
    id: "security_link",
    href: addUtmParams( getPlatformPathUrl("security", "account_center#security") ),
    label: __("Security", "bluehost-wordpress-plugin"),
    color: "yst-fill-[#17b212]",
  },
  {
    icon: IdentificationIcon,
    id: "validation_token_link",
    href: isJarvis
      ? addUtmParams( getPlatformPathUrl("account-center") )
      : addUtmParams( getPlatformBaseUrl("/cgi/token") ),
    label: __("Validation Token", "bluehost-wordpress-plugin"),
    color: "yst-fill-[#f89c24]",
  },
];

export function AccountCard(props) {
  return (
    <Card>
      <Card.Content>
        <Title size={2}>Bluehost Account</Title>
        <ul className="yst-grid yst-grid-cols-3 yst-h-full">
          {base.map((link) => (
            <li
              key={link.id}
              className="yst-flex yst-items-center yst-justify-center"
            >
              <a
                href={link.href}
                className={classNames(
                  "yst-flex yst-flex-col yst-gap-3",
                  "yst-items-center yst-text-center",
                  "yst-text-[#404040] hover:yst-text-primary"
                )}
              >
                <link.icon className={"yst-w-12"} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Card.Content>
    </Card>
  );
}
