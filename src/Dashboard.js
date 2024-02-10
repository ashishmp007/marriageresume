// Dashboard.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const decryptedToken = "abcdefghijklmnopqrstuvwxyz";

const Dashboard = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));

    if (token) {
      console.log("welcome");
    } else {
      navigate("/SignIn");
    }
  }, []);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <Container>
      <Header>
        <ToggleButton onClick={toggleSideMenu}>SIDE MENU</ToggleButton>
      </Header>
      <MainContent>
        <SideMenu showSideMenu={showSideMenu}>
          {/* Side menu content goes here */}
        </SideMenu>
        <FeedContainer>
          {[...Array(10).keys()].map((index) => (
            <Card key={index}>
              <h3>Post {index + 1}</h3>
              <p>Content for Post {index + 1} goes here.</p>
            </Card>
          ))}
        </FeedContainer>
      </MainContent>
    </Container>
  );
};

export default Dashboard;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #3b5998;
  color: white;
  padding: 10px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
`;

const SideMenu = styled.nav`
  background-color: #eceff5;
  width: ${({ showSideMenu }) => (showSideMenu ? "200px" : "0")};
  overflow-x: hidden;
  transition: width 0.3s ease;
`;

const FeedContainer = styled.div`
  flex: 1;
  overflow-y: auto; /* Make the container scrollable */
  padding: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #dddfe2;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
`;

const ToggleButton = styled.button`
  background-color: #3b5998;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
