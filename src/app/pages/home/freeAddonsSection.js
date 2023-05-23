import { FreePlugins } from "@newfold-labs/wp-module-ecommerce";
import { useNotification } from "../../components/notifications/feed";

export function FreeAddonsSection() {
  let notify = useNotification();
  return <FreePlugins notify={notify} />;
}
