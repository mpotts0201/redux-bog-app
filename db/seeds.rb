# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

murphy = User.create(email: 'murphy@potts.com', password: 'password', password_confirmation: 'password')


yoda = Creature.create(name: 'Yoda', description: 'Short and green', user_id: murphy.id)

chewy = Creature.create(name: 'Chewy', description: 'Tall and hairy', user_id: murphy.id)

r2d2 = Creature.create(name: 'R2', description: 'Short and shiny', user_id: murphy.id)
