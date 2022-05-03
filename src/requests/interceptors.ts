import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    // you can add some information before send it.
    // conf.headers['Auth'] = 'some token'
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (next) => {
    return Promise.resolve(next);
  },
  (error) => {
    if (error.response.status === 400) {
      console.error("Bad request");
    }

    // You can handle error here and trigger warning message without get in the code inside
    // store.dispatch({
    //   type: env.actionsTypes.openModal,
    //   message: error.message,
    // });
    // return Promise.reject(error);
  }
);
