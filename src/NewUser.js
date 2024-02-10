import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NewUserForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    birthTime: "",
    birthPlace: "",
    fatherName: "",
    motherName: "",
    height: "",
    color: "",
    address: "",
    occupation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
    // Assuming successful submission, navigate to dashboard
    navigate("/Dashboard");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Create New User</h2>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="date"
          name="birthDate"
          placeholder="Birth Date"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="birthTime"
          placeholder="Birth Time"
          value={formData.birthTime}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="birthPlace"
          placeholder="Birth Place"
          value={formData.birthPlace}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="motherName"
          placeholder="Mother's Name"
          value={formData.motherName}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="height"
          placeholder="Height"
          value={formData.height}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="occupation"
          placeholder="Occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        />
        <Button type="submit">Create User</Button>
      </Form>
    </Container>
  );
};

export default NewUserForm;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: auto; /* Enable vertical scrolling */
  background-color: #f0f2f5; /* Example background color */
`;

const Form = styled.form`
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #3b5998;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #3b5998;
  color: white;
  border: none;
  padding: 12px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #2d4379;
  }
`;
