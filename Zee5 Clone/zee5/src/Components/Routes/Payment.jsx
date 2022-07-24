import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondNavbar from "../LandingPage/SecondNavbar";
import styles from "./payment.module.css";

const Payment = () => {
  const toast = useToast();
  const position = ["top"];

  const navigate = useNavigate();

//   const [value, setValue] = useState("");
  
  const click = () => {
    toast({
      title: "Congrats..!",
      description: "Payment Sucessfull.",
      status: "success",
      duration: 9000,
      position: position,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <div>
        <SecondNavbar />
    <div className={styles.box}>
      <div className={styles.header}>
        <h1> Make Payment</h1>
      </div>
      <div className={styles.inp}>
        <div>
          <label> Enter Card Number</label>
          <Input variant="flushed" placeholder="Enter Card No" type="number" />
        </div>
        <div>
          <label> Enter Expiry </label>
          <Input
            min="2018-03"
            variant="flushed"
            placeholder="Enter dd/mm/yy"
            type="month"
         
          />
        </div>
        <div>
          <label> Enter CVV</label>
          <Input type="password" variant="flushed" placeholder="Enter CVV"  />
        </div>
        <Button 
        onClick={click} 
        colorScheme="purple" 
        w="90%" 
        size="md"
        // onClick={() => {
        //     // console.log(value);
        //     if (!value) {
        //       alert('Please enter payment details');
        //     }
        // }}
        >
          Proceed to pay
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Payment;
