const withValidation = (CustomComponent, conditions) => {
  return (props) => {
    const validation = (key, value) => {
      const validationCondition = conditions[key];

      return validationCondition(value ?? "");
    };

    return <CustomComponent {...{ validation, ...props }} />;
  };
};

export default withValidation;
