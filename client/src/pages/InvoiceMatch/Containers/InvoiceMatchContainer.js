// Import the invoice card components.
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomeButtonComponent from "../../../components/HomeButtonComponent";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const InvoiceMatchContainer = () => {
  const [invoice, setInvoice] = useState({});
  const { invoice_number } = useParams();

// Get invoice 
  useEffect(() => {
    fetch(`http://localhost:3000/invoices/${invoice_number}`)
      .then((res) => res.json())
      .then(setInvoice);
  }, []);

//   Get order linked to invoice
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/invoices/${invoice_number}/order`)
      .then((res) => res.json())
      .then(setOrder);
  }, []);

  const navigate = useNavigate();

  // Flask.json needs the header content type for the post
//   Navigates away after submitting to the server. 
  const handleMatch = () => {
    fetch(`http://localhost:3000/invoices/${invoice_number}/match`, {
      method: "POST",
      body: JSON.stringify({
        status_matched: true,
      }),
      headers: {
        "content-type": "application/JSON",
      },
    }).then(() => {
      navigate("/ViewKeyed");
    });
  };
  return (
    <>
      <HomeButtonComponent></HomeButtonComponent>
      <h1>Invoice matching Screen </h1>
      <div className="Matching_detail>">
        <h3>Purchase order associated for match</h3>
        <span>
          Confirm match to order{" "}
          <span className="highlighted_text">{order.po_number}</span> for
          receipted amount of{" "}
          <span className="highlighted_text">{order.receipted_amount}</span>
        </span>
        <h3>Invoice detail for match</h3>
        <p>
          Invoice number:{" "}
          <span className="highlighted_text">{invoice.invoice_number}</span>
        </p>
        Description of goods:{" "}
        <span className="highlighted_text">{invoice.description_of_goods}</span>
        <p>
          Total before tax:
          <span className="highlighted_text"> {invoice.pre_tax} </span>
        </p>
        <p>
          Tax rate: <span className="highlighted_text">{invoice.tax_rate}</span>
        </p>
        <p>
          Total to pay:{" "}
          <span className="highlighted_text"> {invoice.total_to_pay}</span>
        </p>
      </div>
      <Stack style={{ margin: "auto", width: "500px" }} spacing={2}>
        {order.receipted_amount >= invoice.total_to_pay ? (
          <Button
            variant="outlined"
            style={{ color: "hotpink" }}
            onClick={() => {
              handleMatch();
            }}
          >
            Confirm match
          </Button>
        ) : (
          <Alert severity="error">
            <AlertTitle>Cannot Match</AlertTitle>Not enough receipted to pay
            invoice
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default InvoiceMatchContainer;
