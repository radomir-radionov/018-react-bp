enum pageRoutes {
  MAIN = "/",
  CREATE_ORDER_CHOOSE_WORK = "/order/choosework",
  CREATE_ORDER_EMPLOYEES = "/order/employees",
  CREATE_ORDER_TIME = "/order/time",
  CREATE_ORDER_DESCRIPTION = "/order/description",
  CREATE_ORDER_ADDRESS = "/order/address",
  CREATE_ORDER_NOTIFICATION = "/order/notification",

  PROFILE = "/account",
  SIGNIN = "/account/signin",
  SIGNUP = "/account/create",
  VERIFY = "/account/verify",
  FORGOT_PASSWORD = "/account/password/reset",

  FAQ = "/faq",
  TERMS_OF_USE = "/terms",
  PRIVACY_POLICY = "/privacy",
  PRIVACY_COOKIES = "/cookies",
  CONTACT = "/contact",
  NOT_FOUND = "/404",
  INTERNAL_SERVER = "/500",
  PRESENTATION = "/presentation",
}

export default pageRoutes;
