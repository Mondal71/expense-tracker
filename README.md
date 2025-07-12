# BudgetBox - Personal Finance Tracker

A modern, full-stack personal finance tracking application built with React, Firebase, and Tailwind CSS.

## 🧩 Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, React Router, Recharts
- **Backend/Database**: Firebase Auth + Firestore
- **Notifications**: React Toastify
- **Hosting**: Firebase Hosting

## 📌 Key Features

- 🔐 **User Authentication** - Signup/Login with email + password
- 📊 **Dashboard** - Welcome user with summary cards
- 💰 **Income Management** - Add/Edit/Delete monthly salary
- 💸 **Expense Tracker** - Track expenses by category with filtering
- 📈 **Investment Tracker** - Monitor investments by platform
- 🧾 **History/Reports** - Timeline view with filtering options
- 📉 **Charts & Graphs** - Visual data representation
- 🧠 **About Page** - App details and developer info

## 🚀 Development Roadmap

### Day 1 ✅ - Project Setup
- [x] Vite + React setup
- [x] Tailwind CSS configuration
- [x] Folder structure creation
- [x] Basic routing setup
- [x] Dependencies installation

### Day 2 - Firebase Auth
- [ ] Firebase configuration
- [ ] Email/Password authentication
- [ ] AuthContext setup
- [ ] Login/Signup components
- [ ] Toastify integration

### Day 3 - Routing & Protected Routes
- [ ] React Router setup
- [ ] PrivateRoute component
- [ ] Route protection

### Day 4 - Dashboard UI
- [ ] Sidebar + Topbar layout
- [ ] Summary cards
- [ ] Welcome user component

### Day 5 - Salary Module
- [ ] Add/Edit/Delete salary
- [ ] Firestore integration
- [ ] Dashboard display

### Day 6 - Expense Module
- [ ] Expense form
- [ ] Category management
- [ ] Firestore operations

### Day 7 - Investment Module
- [ ] Investment tracking
- [ ] Platform management
- [ ] Monthly calculations

### Day 8 - Charts
- [ ] Bar charts (salary vs expenses vs investment)
- [ ] Pie charts (expense by category)

### Day 9 - History & About
- [ ] Timeline view
- [ ] Filter options
- [ ] About page

### Day 10 - Final Touch & Hosting
- [ ] UI polish
- [ ] Error handling
- [ ] Responsive design
- [ ] Firebase hosting deployment

## 🧱 Project Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── ProtectedRoute.jsx
│   └── SummaryCard.jsx
├── context/
│   └── AuthContext.jsx
├── firebase/
│   └── config.js
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   ├── Expenses.jsx
│   ├── Investments.jsx
│   ├── History.jsx
│   └── About.jsx
├── utils/
│   └── helpers.js
├── App.jsx
└── main.jsx
```

## 🎨 UI Design

- **Colors**: Professional gray palette with white backgrounds
- **Layout**: Grid-based dashboard with cards
- **Components**: Rounded corners, shadows, clean typography
- **Responsive**: Mobile-first design approach

## 💡 Expense Categories

- 🍕 Food
- ✈️ Travel
- 🏠 Rent
- 🛒 Shopping
- 💊 Health
- 📚 Education
- 📦 Others

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Current Status**: Day 1 Complete ✅
**Next**: Firebase Authentication Setup 