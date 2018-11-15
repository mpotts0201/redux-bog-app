class CreateCreatures < ActiveRecord::Migration[5.1]
  def change
    create_table :creatures do |t|
      t.string :name
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
