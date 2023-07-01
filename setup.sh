echo "This file will setup the environment for you"
echo ""
echo "First, it will ask your Twitter and Bsky information"
echo "This information is >only< stored locally and not uploaded anywhere"
echo "Want to delete your information? Remove the playwright/.auth folder and the .env file"
echo ""

echo "What's your Twitter username? "
read twitter_username
echo "What's your Twitter password? "
read twitter_password

echo ""
echo "Saving credentials to local variables"
echo "TWITTER_USERNAME=\"${twitter_username}\"\nTWITTER_PASSWORD=\"${twitter_password}\"" > .env

echo ""
echo "Creating necessary credential files in playwright/.auth"
mkdir -p playwright/.auth
touch playwright/.auth/user.json
echo "{}" > playwright/.auth/user.json
