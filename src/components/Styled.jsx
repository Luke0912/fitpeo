import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  background-color: #1f1f2e;
  // color: white;
  // height: 100vh;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  background-color: #2c2c3a;
  padding: 20px 0;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;

  .icon {
    margin-bottom: 20px;
    font-size: 2rem;
  }
  .icon1 {
    font-size: 2rem;
    margin-top: auto;
    padding: 10px;
    border-radius: 8px;
    color: white;
  }
  .icon2 {
    margin-bottom: 20px;
    font-size: 2rem;
    background-color: blue;
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: white;
  }
`;

export const SidebarIcon = styled.div`
  margin: 20px 0;
  font-size: 24px;
`;

export const SidebarBottomIcon = styled(SidebarIcon)`
  margin-top: auto;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c2c3a;
  height: 60px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 60px; /* Adjust to align with the sidebar width */
  right: 0;
  z-index: 1000;
`;

export const MainContent = styled.div`
  margin-left: 60px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px 20px; /* Add top padding to accommodate the TopBar */
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.div`
  margin-left: 20px;
  font-size: 24px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const Card = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const CardValue = styled.p`
  font-size: 2rem;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ActivityCard = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  flex: 2;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const RecentOrders = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  min-width: 300px;
  margin-top: 20px; /* Added margin at the top */
`;


export const RecentOrdersTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

export const RecentOrdersTH = styled.th`
  border-bottom: 1px solid #444;
  padding: 10px;
  text-align: left;
`;

export const RecentOrdersTD = styled.td`
  border-bottom: 1px solid #444;
  padding: 10px;
`;

export const CustomerFeedback = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  min-width: 300px;
`;

export const FeedbackItem = styled.div`
  margin-bottom: 10px;
`;

export const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const FeedbackName = styled.h4`
  margin-left: 5px;
`;

export const FeedbackText = styled.p`
  margin: 0;
`;

export const PieChartContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

export const GoalContainer = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: auto;
`;

export const GoalCard = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GoalTitle = styled.h2`
  margin: 10px 0;
`;

export const LeftColumn = styled.div`
  flex: 1;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 2;
    margin-right: 10px;
  }

  h2 {
    margin-top: 0;
    margin-left: 10px;
    align-self: flex-start;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.div`
  background-color: #1f1f2e;
  text-align: center;
  padding: 10px 0;
  color: white;
`;
