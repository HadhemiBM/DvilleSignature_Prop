"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Dashboard: React.FC = () => {
  const router = useRouter();
  const properties = [
    { id: 1, name: "Luxury Villa", status: "Available", price: "$500,000" },
    { id: 2, name: "Cozy Apartment", status: "Sold", price: "$200,000" },
  ];

  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Inactive",
    },
  ];

  const payments = [
    {
      id: 1,
      user: "John Doe",
      subscription: "Gold",
      amount: "$99",
      status: "Paid",
    },
    {
      id: 2,
      user: "Jane Smith",
      subscription: "Silver",
      amount: "$49",
      status: "Pending",
    },
  ];

  const handleEdit = (id: number) => {
    // console.log("Edit item with ID:", id);
    router.push(`./blogDetails?id=${id}`);
  };

  const handleDelete = (id: number) => {
    console.log("Delete item with ID:", id);
  };

  return (
    <>
      <div className={styles.blackDiv}></div>
      <div className={styles.dashboardContainer}>
        {/* 
        <aside className={styles.sidebar}>
          <h2 className={styles.logo}>Admin Dashboard</h2>
          <ul className={styles.navLinks}>
            <li>Overview</li>
            <li>Property Management</li>
            <li>User Management</li>
            <li>Subscription & Payments</li>
            <li>Analytics & Reports</li>
          </ul>
        </aside> */}
        <main className={styles.mainContent}>
          <section className={styles.overview}>
            <h1>Dashboard Overview</h1>
            <div className={styles.metrics}>
              <div className={styles.metricCard}>
                <h2>Properties Listed</h2>
                <p>{properties.length}</p>
              </div>
              <div className={styles.metricCard}>
                <h2>Users</h2>
                <p>{users.length}</p>
              </div>
              <div className={styles.metricCard}>
                <h2>Active Subscriptions</h2>
                <p>1</p>
              </div>
            </div>
          </section>

          <section className={styles.managementSection}>
            <h2>Property Management</h2>
            <Link href="./create">
              <button className={styles.addButton}>+ Add New Property</button>
            </Link>
            <table className={styles.propertyTable}>
              <thead>
                <tr>
                  <th>Property Name</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property) => (
                  <tr key={property.id}>
                    <td>{property.name}</td>
                    <td>{property.status}</td>
                    <td>{property.price}</td>
                    <td className={styles.thedit}>
                      <button onClick={() => handleEdit(property.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(property.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.managementSection}>
            <h2>User Management</h2>
            <table className={styles.userTable}>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td className={styles.thedit}>
                      <button onClick={() => handleEdit(user.id)}>Edit</button>
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className={styles.managementSection}>
            <h2>Subscription & Payments</h2>
            <Link href="./pricing">
              <button className={styles.addButton}>+ Add subscription</button>
            </Link>
            <table className={styles.paymentTable}>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Subscription</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.user}</td>
                    <td>{payment.subscription}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.status}</td>
                    <td className={styles.thedit}>
                      <button onClick={() => handleEdit(payment.id)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(payment.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
