import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts'
import { CompleteOrderPage, HomePage } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}
