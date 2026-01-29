'use client'
import React from 'react'

interface MenuItem {
  name: string
  description: string
  price: string
}

const menuItems: MenuItem[] = [
  { name: 'Espresso', description: 'Rich and bold shot of coffee.', price: '$3' },
  { name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$4' },
  { name: 'Latte', description: 'Espresso with creamy steamed milk.', price: '$4.5' },
  { name: 'Mocha', description: 'Chocolate flavored latte.', price: '$5' },
  { name: 'Croissant', description: 'Buttery and flaky pastry.', price: '$3.5' },
  { name: 'Muffin', description: 'Freshly baked, variety of flavors.', price: '$3' },
]

export default function Menu() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-yellow-900">Our Menu</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {menuItems.map(({ name, description, price }) => (
          <li key={name} className="bg-yellow-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">{name}</h3>
            <p className="text-yellow-700 mb-3">{description}</p>
            <p className="font-bold text-yellow-900">{price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
