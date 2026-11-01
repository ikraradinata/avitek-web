import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Link dan router yang sadar bahasa, pakai ini sebagai pengganti bawaan Next
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
