import ContactFooter from "./ContactFooter";
import Social from "./Social";
import Pages from "./Pages";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark">
        <div className="container w-full md:w-custom-md xl:w-custom-xl mx-auto px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <ContactFooter />

          <div className="mt-16 border-t border-gray-100 pt-8 flex items-center justify-between flex-col gap-y-4 md:flex-row lg:mt-24 ">
            <Pages />
            <Social />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
