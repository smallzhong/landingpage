CREATE TABLE IF NOT EXISTS timeline
(
    user        TEXT    NOT NULL,
    inserted_at INTEGER NOT NULL,
    tweet_id    INTEGER NOT NULL UNIQUE
);
CREATE INDEX IF NOT EXISTS timeline_user_inserted_at_idx ON timeline (user, inserted_at);

CREATE TABLE IF NOT EXISTS auth
(
    name          TEXT    NOT NULL UNIQUE,
    access_token  TEXT    NOT NULL,
    refresh_token TEXT    NOT NULL,
    expires_at    INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS kv
(
    key   TEXT UNIQUE NOT NULL,
    value TEXT        NOT NULL
);