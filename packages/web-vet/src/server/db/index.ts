import { type NodePgClient, type NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { env } from "~/env";
// You can specify any property from the node-postgres connection options
let _db: NodePgDatabase<Record<string, never>> & {
	$client: NodePgClient;
};

export const useDb = () => {
	if (!_db) {
		_db = drizzle({
			connection: {
				connectionString: env.DATABASE_URL,
				ssl: true,
			},
			logger: env.DEV,
		});
	}

	return _db;
};
