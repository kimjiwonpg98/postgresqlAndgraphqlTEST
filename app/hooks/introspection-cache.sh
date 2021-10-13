export PATH

PATH=$(egrep -v '^#' .env | xargs)

postgraphile -c $POSTGRES_CONNECTION \
  -s $SCHEMA \
  --write-cache 'introspection.cache' \
  --no-server