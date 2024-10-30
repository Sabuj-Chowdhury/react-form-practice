const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phoneNumber.value);
    console.log("Submitted!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="text" name="phoneNumber" placeholder="phone number" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
