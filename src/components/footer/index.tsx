import Logo from "@/assets/Logo.png";

const index = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste
            tempore debitis corrupti molestias inventore voluptates quis atque
            distinctio perferendis?
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem, ipsum dolor.</p>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact us</h4>
            <p className="my-5">Lorem, ipsum dolor.</p>
            <p>+(111)343-4343</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default index;
