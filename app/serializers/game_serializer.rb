class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :genre
end
