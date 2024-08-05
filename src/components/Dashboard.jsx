import React from "react";
import {
  FaBox,
  FaCheck,
  FaTimes,
  FaDollarSign,
  FaBullseye,
  FaUtensils,
  FaListAlt,
  FaUserCircle,
  FaBell,
  FaEnvelope,
  FaHive,
  FaCaretSquareRight,
} from "react-icons/fa";
import {
  DashboardContainer,
  Sidebar,
  SidebarIcon,
  MainContent,
  TopBar,
  UserSection,
  UserIcon,
  CardContainer,
  Card,
  CardTitle,
  CardValue,
  ActivityCard,
  RecentOrders,
  RecentOrdersTable,
  RecentOrdersTH,
  RecentOrdersTD,
  CustomerFeedback,
  FeedbackItem,
  FeedbackHeader,
  FeedbackName,
  FeedbackText,
  PieChartContainer,
  GoalContainer,
  GoalCard,
  GoalTitle,
  ContentArea,
  LeftColumn,
  RightColumn,
  Footer
} from "./Styled";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "5", uv: 4000 },
  { name: "9", uv: 3000 },
  { name: "11", uv: 2000 },
  { name: "13", uv: 2780 },
  { name: "15", uv: 1890 },
  { name: "17", uv: 2390 },
  { name: "19", uv: 3490 },
  { name: "21", uv: 2000 },
  { name: "23", uv: 3000 },
  { name: "25", uv: 4000 },
  { name: "5", uv: 4000 },
  { name: "9", uv: 3000 },
  { name: "11", uv: 2000 },
  { name: "13", uv: 2780 },
  { name: "15", uv: 1890 },
  { name: "17", uv: 2390 },
  { name: "19", uv: 3490 },
  { name: "21", uv: 2000 },
  { name: "23", uv: 3000 },
  { name: "25", uv: 4000 },
];

const pieData = [
  { name: "Completed", value: 70 },
  { name: "Remaining", value: 30 },
];

const COLORS = ["#00C49F", "#FFBB28"];

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar>
      <div className="icon">
      <FaHive />
      </div>
      <div className="icon2">
      <FaBox />
      </div>
        <SidebarIcon>
          <FaCheck />
        </SidebarIcon>
        <SidebarIcon>
          <FaTimes />
        </SidebarIcon>
        <SidebarIcon>
          <FaDollarSign />
        </SidebarIcon>
        <div className="icon1">
        <FaCaretSquareRight />
        </div>
      </Sidebar>
      <MainContent>
        <TopBar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                marginLeft: "20px",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#3c3c4a",
                color: "white",
                width: "300px", // Increase the width as needed
              }}
            />
          </div>

          <UserSection>
            <UserIcon>
              <FaEnvelope />
            </UserIcon>
            <UserIcon>
              <FaBell />
            </UserIcon>
            <UserIcon>
              <FaUserCircle />
            </UserIcon>
          </UserSection>
        </TopBar>
        <ContentArea>

          <LeftColumn>
          <h2>Dashboard</h2>
            <CardContainer>
              <Card>
                <FaBox size={40} />
                <CardTitle>Total Orders</CardTitle>
                <CardValue>75</CardValue>
              </Card>
              <Card>
                <FaCheck size={40} />
                <CardTitle>Total Delivered</CardTitle>
                <CardValue>70</CardValue>
              </Card>
              <Card>
                <FaTimes size={40} />
                <CardTitle>Total Cancelled</CardTitle>
                <CardValue>5</CardValue>
              </Card>
              <Card>
                <FaDollarSign size={40} />
                <CardTitle>Total Revenue</CardTitle>
                <CardValue>$12k</CardValue>
              </Card>
            </CardContainer>
            <ActivityCard>
              <h2>Activity</h2>
              <ResponsiveContainer width="100%" height="80%">
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 5]} />
                </BarChart>
              </ResponsiveContainer>
            </ActivityCard>
            <RecentOrders>
              <h2>Recent Orders</h2>
              <RecentOrdersTable>
                <thead>
                  <tr>
                    <RecentOrdersTH>Customer</RecentOrdersTH>
                    <RecentOrdersTH>Order No.</RecentOrdersTH>
                    <RecentOrdersTH>Amount</RecentOrdersTH>
                    <RecentOrdersTH>Status</RecentOrdersTH>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <RecentOrdersTD>Wade Warren</RecentOrdersTD>
                    <RecentOrdersTD>15478256</RecentOrdersTD>
                    <RecentOrdersTD>$124.00</RecentOrdersTD>
                    <RecentOrdersTD>Delivered</RecentOrdersTD>
                  </tr>
                  <tr>
                    <RecentOrdersTD>Jane Cooper</RecentOrdersTD>
                    <RecentOrdersTD>48967586</RecentOrdersTD>
                    <RecentOrdersTD>$305.02</RecentOrdersTD>
                    <RecentOrdersTD>Delivered</RecentOrdersTD>
                  </tr>
                  <tr>
                    <RecentOrdersTD>Guy Hawkins</RecentOrdersTD>
                    <RecentOrdersTD>78985215</RecentOrdersTD>
                    <RecentOrdersTD>$45.88</RecentOrdersTD>
                    <RecentOrdersTD>Cancelled</RecentOrdersTD>
                  </tr>
                  <tr>
                    <RecentOrdersTD>Kristin Watson</RecentOrdersTD>
                    <RecentOrdersTD>20965732</RecentOrdersTD>
                    <RecentOrdersTD>$65.00</RecentOrdersTD>
                    <RecentOrdersTD>Pending</RecentOrdersTD>
                  </tr>
                  <tr>
                    <RecentOrdersTD>Cody Fisher</RecentOrdersTD>
                    <RecentOrdersTD>95715620</RecentOrdersTD>
                    <RecentOrdersTD>$545.00</RecentOrdersTD>
                    <RecentOrdersTD>Delivered</RecentOrdersTD>
                  </tr>
                  <tr>
                    <RecentOrdersTD>Savannah Nguyen</RecentOrdersTD>
                    <RecentOrdersTD>78514568</RecentOrdersTD>
                    <RecentOrdersTD>$128.20</RecentOrdersTD>
                    <RecentOrdersTD>Delivered</RecentOrdersTD>
                  </tr>
                </tbody>
              </RecentOrdersTable>
            </RecentOrders>
          </LeftColumn>
          <RightColumn>
            <PieChartContainer>
              <CardTitle>Net Profit</CardTitle>
              <PieChart width={100} height={180}>
                <Pie
                  data={pieData}
                  cx={50}
                  cy={50}
                  innerRadius={30}
                  outerRadius={40}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <CardValue>$6759.25</CardValue>
              <p>70% Goal achieved</p>
            </PieChartContainer>
            <GoalContainer>
              <GoalCard>
                <FaBullseye size={30} />
                <GoalTitle>Goals</GoalTitle>
              </GoalCard>
              <GoalCard>
                <FaUtensils size={30} />
                <GoalTitle>Popular Dishes</GoalTitle>
              </GoalCard>
              <GoalCard>
                <FaListAlt size={30} />
                <GoalTitle>Menus</GoalTitle>
              </GoalCard>
            </GoalContainer>
            <CustomerFeedback>
              <h2>Customer's Feedback</h2>
              <FeedbackItem>
                <FeedbackHeader>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Jenny Wilson"
                  />
                  <FeedbackName>Jenny Wilson</FeedbackName>
                </FeedbackHeader>
                <FeedbackText>
                  The food was excellent and so was the service.
                </FeedbackText>
              </FeedbackItem>
              <FeedbackItem>
                <FeedbackHeader>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Dianne Russell"
                  />
                  <FeedbackName>Dianne Russell</FeedbackName>
                </FeedbackHeader>
                <FeedbackText>
                  We enjoyed the Eggs Benedict served on homemade focaccia bread
                  and hot coffee.
                </FeedbackText>
              </FeedbackItem>
              <FeedbackItem>
                <FeedbackHeader>
                  <img src="https://via.placeholder.com/40" alt="Devon Lane" />
                  <FeedbackName>Devon Lane</FeedbackName>
                </FeedbackHeader>
                <FeedbackText>
                  Normally, I don't like wings, but theirs are lean, meaty, and
                  tender, and the sauce is so good! Great place, highly
                  recommended.
                </FeedbackText>
              </FeedbackItem>
            </CustomerFeedback>
          </RightColumn>
        </ContentArea>
        <Footer>
          <p>© 2024 Your Company</p>
        </Footer>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
