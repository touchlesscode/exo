/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { FormWrapper } from "./style";
import { paymentFormOptions } from "@constants/index";
import PaymentInput from "@components/PaymentInput";

const PaymentsForm = ({ filterType }: { filterType: "PRICE" | "PAYMENT" }) => {
  return (
    <FormWrapper
      filterType={filterType}
      aria-hidden={filterType === "PRICE" ? true : false}
    >
      {paymentFormOptions.map((val) => (
        <PaymentInput
          key={val.label}
          initialText={val.value}
          label={val.label}
          disabled={val.isDisabled}
          type={val.type}
          options={val.options}
        />
      ))}
    </FormWrapper>
  );
};

export default PaymentsForm;
