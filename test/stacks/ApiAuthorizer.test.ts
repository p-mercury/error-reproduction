import { mockClient } from "aws-sdk-client-mock";

import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const mockDynamoDBClient = mockClient(DynamoDBClient);

mockDynamoDBClient.on(GetItemCommand).resolves({
  Item: { role: { S: "test-role" } },
});
