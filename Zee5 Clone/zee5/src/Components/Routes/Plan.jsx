import { Button, Checkbox } from "@chakra-ui/react";
import React from "react";
import styles from "./plan.module.css";
import { useNavigate } from "react-router-dom";
import { CheckIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { BsCheckCircle, BsCheckLg } from "react-icons/bs";
import SecondNavbar from "../LandingPage/SecondNavbar";

const PremiumPlan = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/payment");
  };
  return (
    <div style={{paddingTop: '3.5rem'}}>
    <SecondNavbar />
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Watch Ad-Free with Premium!</h1>
        <div className={styles.flex}>
          <div>
            <BsCheckLg color='rgb(250, 111, 190)' size='1.5rem'/>
          </div>
          <div>
            <p>2800+ Blockbuster Movies</p>
          </div>
          <div>
          <QuestionOutlineIcon />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
          <BsCheckLg color='rgb(250, 111, 190)' size='1.5rem'/>
          </div>
          <p>250+ Web Series</p>
          <div>
          <QuestionOutlineIcon />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
          <BsCheckLg color='rgb(250, 111, 190)' size='1.5rem'/>
          </div>
          <p>Live TV, Before TV</p>
          <div>
          <QuestionOutlineIcon />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
          <BsCheckLg color='rgb(250, 111, 190)' size='1.5rem'/>
          </div>
          <p>Offer: Extra 10% OFF on Cards</p>
          <div>
          <QuestionOutlineIcon />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
          <BsCheckLg color='rgb(250, 111, 190)' size='1.5rem'/>
          </div>
          <p>Watch on Mobile, TV, Laptop</p>
          <div>
          <QuestionOutlineIcon />
          </div>
        </div>
        <div className={styles.flex}>
          <div>
          <BsCheckLg color='rgb(250, 111, 190)' size='1.5rem'/>
          </div>
          <p>Eduaurra Competitive Exams Learning</p>
          <div>
          <QuestionOutlineIcon />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.box1}>
          <div className={styles.line}>
            <div className={styles.flex2}>
              <div className={styles.off}>
                <p>LIMITED PERIOD OFFER</p>
              </div>
              <div className={styles.off2}>SAVE 30%</div>
            </div>

            <div className={styles.flex3}>
              <div className={styles.price}>
                <h1>12 months plan</h1>
                <p>Effective price ₹58/month</p>
              </div>
              <div className={styles.price2}>
                <s>999</s>
                <h1
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginRight: "5px",
                  }}
                >
                  699
                </h1>
                <div>
                  <BsCheckCircle 
                  style=
                  {{
                    backgroundColor: 'green', color: 'white', borderRadius: '1rem'}} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.innerbox}>
            <img
              width="30px"
              height="30px"
              src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
              alt=""
            />
            <p>Watch on 3 Screens at the same time</p>
          </div>
        </div>

        <div className={styles.box2}>
          <div className={styles.line}>
            <div className={styles.flex3}>
              <div className={styles.price}>
                <h1>3 months plan</h1>
              </div>
              <div className={styles.price2}>
                <h1
                  style={{
                    fontSize: "19px",
                    fontWeight: "bold",
                    marginRight: "5px",
                  }}
                >
                  499
                </h1>
                <Checkbox
                 borderColor={'black'}
                 defaultChecked
                 >
                 </Checkbox>
              </div>
            </div>
          </div>
          <div className={styles.innerbox}>
            <img
              width="30px"
              height="30px"
              src="https://cdn-icons-png.flaticon.com/512/482/482478.png"
              alt=""
            />
            <p>Watch on 2 Screens at the same time</p>
          </div>
        </div>
        <div>
          <br />
          <br />
          <Button onClick={click} colorScheme="purple" w="90%" size="md">
            Continue with 699
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PremiumPlan;
