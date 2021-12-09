Game.delete_all

resp = RestClient::Request.execute(method: :get,
    url: "https://api.rawg.io/api/games?key=9a5cda69e8474c7db997887db0a32b41",
    headers:{
        'Content-Type': 'application/json'
    })
    games_data = JSON.parse(resp.body)
    games = games_data.drop(3)
    # open('myfile.out', 'w') do |f|
    #     f << games
    # end
    
    games_list = games.first
    new_games_list = games_list.drop(1)
    new_games_list = new_games_list.first
    open('myfile.out', 'w') do |f|
        f << new_games_list
    end


    puts "starting seeding"
    new_games_list.each do |game|
        Game.create(
            name: game["name"],
            image: game["background_image"],
            genre: game["genres"].first["name"]
    
        )
    end

    puts "seeding finished"