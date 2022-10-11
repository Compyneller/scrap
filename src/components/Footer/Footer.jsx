import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", bounce: 0.5, duration: 3 }}
      viewport={{ once: true, amount: 0.1 }}
      className="w-100 py-5 bg-dark text-light">
      <Container>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error nostrum
        optio, non omnis nisi maiores vero aperiam nam eaque eligendi distinctio
        minus laudantium. Nemo eius cupiditate totam a, sint hic ut reiciendis
        tempore quasi? Ullam odio, id suscipit ex totam libero obcaecati aperiam
        animi itaque in ut facere omnis a eius eveniet voluptates quam sapiente
        blanditiis! Et cupiditate explicabo illum? Error dignissimos consectetur
        nam eaque sint saepe harum aperiam aut ipsam! Ipsum eum corrupti odio
        quod natus mollitia distinctio exercitationem delectus, atque cumque
        nihil maiores veniam assumenda commodi animi dicta quam quibusdam quia
        ducimus eveniet expedita quas deserunt. Praesentium voluptatem vel atque
        quidem nesciunt cum dicta reprehenderit beatae nulla omnis ducimus
        accusantium accusamus, unde in voluptatum temporibus soluta. Sit quam
        distinctio numquam soluta perferendis laborum beatae ratione
        voluptatibus doloremque saepe dolorem quidem officiis tempora natus,
        magnam nostrum rerum esse, quibusdam repudiandae optio ea praesentium!
        Iste officiis pariatur alias, illum repudiandae minima natus nulla
        inventore iure labore quae. Dolorem, odio! Nostrum ratione laudantium
        officia quis debitis sunt distinctio dolor minima architecto enim,
        commodi, praesentium in dignissimos facere ipsum delectus aliquam sint
        eos nulla quaerat recusandae. Asperiores laborum sunt facere distinctio
        ipsum doloribus totam est, a hic, cumque ut nulla iure accusantium.
      </Container>
    </motion.div>
  );
};

export default Footer;
