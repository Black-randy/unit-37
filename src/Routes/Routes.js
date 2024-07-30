import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/sign-up/sign-up";
import Home from "../pages/home/home";
import Blogs from "../pages/blogs/Blogs";
import Error404 from "../pages/400/Error404";
import NavigationBar from "../navigation/navbar/navbar";
import AdminPage from "../pages/Admin/Admin";
import Product from "../pages/Product/Product";
import Signin from "../pages/sign-in/sign-in";
import Maps from "../pages/maps/Maps";
import Cart from "../pages/Cart/Cart";
 function RoutesComponent() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<NavigationBar />}>
           <Route index element={<Home />} />
           <Route path="signin" element={<Signin />} />
           <Route path="signup" element={<SignUp />} />
           <Route path="blogs" element={<Blogs />} />
           <Route path="*" element={<Error404 />} />
           <Route path="admin" element={<AdminPage />} />
           <Route path="product" element={<Product />} />
           <Route path="maps" element={<Maps />} />
           <Route path="cart" element={<Cart />} />
         </Route>
       </Routes>
     </BrowserRouter>
   );
 }
 
 export default RoutesComponent;
