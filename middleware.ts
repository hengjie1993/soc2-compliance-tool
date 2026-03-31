import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale: "zh", // 强制默认中文
  localeDetection: false, // 禁用自动检测，使用默认语言
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
