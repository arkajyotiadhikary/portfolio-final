import React from "react";
const Contact = () => {
      return (
            <div className="mt-10 grid grid-cols-1 gap-10 sm:px-12 lg:grid-cols-2 lg:px-2">
                  <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-bold text-light-text dark:text-dark-text">
                              Contact
                        </h1>
                        <div className="my-3 text-lg">
                              <p className="text-light-text dark:text-dark-text">
                                    {`I'm always open to discussing product design work or partnership
                                    opportunities. Let's chat.`}
                              </p>
                              <p className="my-3 mt-2 text-light-text dark:text-dark-text">{`Alternate email: arka.as.123@gmail.com`}</p>
                        </div>
                  </div>
                  <div className="group rounded-3xl bg-light-secondary dark:bg-dark-secondary shadow shadow-space_cadet-900 p-8 ">
                        <form className="space-y-6 bg-space_cadet-900 p-8 rounded-3xl shadow-space_cadet-900">
                              <div className="flex flex-col space-y-3">
                                    <label
                                          className="text-light-text dark:text-dark-text text-sm font-bold"
                                          htmlFor="name"
                                    >
                                          Name
                                    </label>
                                    <input
                                          type="text"
                                          placeholder="Name"
                                          className="text-light-text dark:text-dark-text bg-transparent border border-gray-700 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="name"
                                    />
                              </div>
                              <div className="flex flex-col space-y-3">
                                    <label
                                          className="text-gray-300 text-sm font-bold text-light-text dark:text-dark-text"
                                          htmlFor="email"
                                    >
                                          Email
                                    </label>
                                    <input
                                          type="email"
                                          placeholder="Email"
                                          className="text-light-text dark:text-dark-text bg-transparent border border-gray-700 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="email"
                                    />
                              </div>
                              <div className="flex flex-col space-y-3">
                                    <label
                                          className="text-gray-300 text-sm font-bold text-light-text dark:text-dark-text"
                                          htmlFor="message"
                                    >
                                          Message
                                    </label>
                                    <textarea
                                          placeholder="Message"
                                          className=" text-light-text dark:text-dark-text bg-transparent border border-gray-700 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                          id="message"
                                          rows={5}
                                    />
                              </div>
                              <button
                                    className="bg-light-accent dark:bg-dark-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                              >
                                    Submit
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default Contact;
