import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;
  background-color: #1f1f2e;
  color: white;

  @media(min-width: 768px) {
    flex-direction: row;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  background-color: #2c2c3a;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  height: 123vh; /* Ensure the sidebar takes the full height of the viewport */

  @media(min-width: 768px) {
    width: 80px;
    padding: 20px 0;
  }
`;

export const SidebarIcon = styled.div`
  margin: 20px 0; /* Reduced the margin to minimize the gap between items */
  font-size: 24px;
`;

export const SidebarBottomIcon = styled(SidebarIcon)`
  margin-top: auto; /* Push the last item to the bottom */
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
  flex-direction: column;
  margin-bottom: 20px;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  flex: 1;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 768px) {
    margin: 0 10px;
  }
`;

export const CardTitle = styled.h2`
  margin: 10px 0;
`;

export const CardValue = styled.p`
  font-size: 24px;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ActivityCard = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  height: 300px;
  width: 100%;

  @media(min-width: 768px) {
    width: 95%;
  }
`;

export const RecentOrders = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;

  @media(min-width: 768px) {
    width: 95%;
  }
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
  padding: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
`;

export const FeedbackItem = styled.div`
  margin-bottom: 5px;
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
`;

export const GoalContainer = styled.div`
  background-color: #2c2c3a;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  height: 30%;
`;

export const GoalCard = styled.div`
  background-color: #2c2c3a;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
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

  @media(min-width: 768px) {
    flex: 2;
    margin-right: 10px;
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
