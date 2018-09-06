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
