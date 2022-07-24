import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Music from "./Music";
import Payment from "./Payment";
import PremiumPlan from "./Plan";
import RegisterPage from "./RegisterPage";

function AllRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/loginpage" element={<LoginPage />}></Route>
            <Route path="/registerpage" element={<RegisterPage />}></Route>
            <Route path="/music" element={< Music />}></Route>
            <Route path="/premiumplan" element={<PremiumPlan />}></Route>
            <Route path="/payment" element={<Payment />}></Route>
        </Routes>
    )
}

export default AllRoutes;