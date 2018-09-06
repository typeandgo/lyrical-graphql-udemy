## Query / mutation

mutation AddSong($title: String) {
  addSong(title: $title) {
    id
    title
  }
}

## Query Variables
{
  "title": "Lorem Ipsum Dolor Sit Amet"
}

## Result
{
  "data": {
    "addSong": {
      "id": "465456564656",
      "title": "Lorem Ipsum Dolor Sit Amet"
    }
  }
}

###################################################

## Query / mutation

mutation DeleteSong($id: ID) {
  deleteSong(id: $id) {
    id
  }
}

## Query Variables

{
  "id": "438596084385069"
}

## Result
{
  "data": {
    "deleteSong": {
      "id": "438596084385069"
    }
  }
}

###################################################

## Query / mutation
query GetSong($id: ID!) {
  song(id: $id) {
    id
    title
  }
}


## Query Variables

{
  "id": "438596084385069"
}

## Result
{
  "data": {
    "song": {
      "id": "438596084385069",
      "title": "Şarkı Adı"
    }
  }
}

###################################################

## Query / mutation
mutation AddLyricToSong($songId: ID!, $content: String) {
  addLyricToSong(songId: $songId, content: $content) {
    id
    lyrics {
      content
    }
  }
}


## Query Variables

{
  "songId": "438596084385069",
  "content": "It was a long night"
}

## Result
{
  "data": {
    "addLyricToSong": {
      "id": "438596084385069",
      "lyrics": [
        {
          content: "It was a long night"
        }
      ]
    }
  }
}
