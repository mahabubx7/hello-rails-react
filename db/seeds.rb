# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

greets = Greeting.create([
  { message: "Hey buddy!" },
  { message: "Hello! Sir." },
  { message: "Hi! Beautiful." },
  { message: "Good Morning!" },
  { message: "Good Evening!" },
  { message: "Good Night!" },
  { message: "Hey! How are you?" },
])
