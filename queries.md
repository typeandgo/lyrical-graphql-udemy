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
