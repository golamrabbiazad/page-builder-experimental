# Todo

- ~~data stored in local db~~
- ~~load raw html from server to the editor~~
- ~~basic tailwind layout~~
- custom layout, for example `grid` layout.
- dynamic data fill up when layout selected.
- dynamic data for example, fill up data based on category. Ex, `crimes, sports, politics, etc.`
- layout data can't be editable.

## Fake API

```json
{
  "news": [
    {
      "headline": "Exciting Matchup Set for Championship Finals",
      "publication_date": "2024-01-10T08:30:00Z",
      "author": "John SportsWriter",
      "source": "SportsNews.com",
      "url": "https://sportsnews.com/exciting-matchup",
      "summary": "A preview of the upcoming championship finals and the teams competing.",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      "category": "Match Previews",
      "images": [
        "https://sportsnews.com/images/matchup1.jpg",
        "https://sportsnews.com/images/matchup2.jpg"
      ],
      "tags": ["championship", "finals", "soccer"],
      "related_articles": [
        {
          "headline": "Key Players to Watch in the Finals",
          "url": "https://sportsnews.com/key-players-finals"
        },
        {
          "headline": "Championship History: Past Winners",
          "url": "https://sportsnews.com/championship-history"
        }
      ],
      "social_media": {
        "twitter": "https://twitter.com/sportsnews/status/123456789",
        "facebook": "https://facebook.com/sportsnews/posts/987654321"
      },
      "language": "en",
      "status": "live",
      "comments": [
        {
          "user": "SportsFan123",
          "comment": "Can't wait for the finals! Go Team A!"
        },
        {
          "user": "SoccerEnthusiast",
          "comment": "Predicting a close match. Exciting times!"
        }
      ]
    }
  ]
}
```
