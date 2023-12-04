import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteDataAction,
  productDataAction,
  editDataAction,
} from "../../Slice/counterSlice";
import { Box, Button, Card } from "@mui/material";
// import { decrement, increment } from "./counterSlice";

const Home = () => {
  const [data, setData] = useState([]);

  const count = useSelector((state) => state.counter.value);

  console.log("count ===>", count);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/search?q=phone")
      .then(function (response) {
        dispatch(productDataAction(response.data.products));
      });
  }, []);

  console.log("data :>> ", data);

  return (
    <Box sx={{ display: "flex" }}>
      {count?.map((item) => (
        <Card sx={{ width: "100px" }} variant="outlined">
          id === {item.id}
          <br />
          brand === {item.brand}
          <br />
          <Button onClick={() => dispatch(deleteDataAction(item.id))}>
            DELETE
          </Button>
          <Button
            onClick={() =>
              dispatch(
                editDataAction({
                  id: `${item.id}`,
                  title: "iPhone 9",
                  description: "An apple mobile which is nothing like apple",
                  price: 549,
                  discountPercentage: 12.96,
                  rating: 4.69,
                  stock: 94,
                  brand: "aman khare",
                  category: "smartphones",
                  thumbnail:
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                })
              )
            }
          >
            Edit
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
