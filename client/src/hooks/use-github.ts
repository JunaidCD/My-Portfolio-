import { useQuery } from "@tanstack/react-query";

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string;
  topics: string[];
}

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
}

const GITHUB_USERNAME = "JunaidCD";

// Fallback data in case of API rate limits
const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 1,
    name: "defi-yield-aggregator",
    description: "Smart contracts for optimizing yield across multiple lending protocols automatically.",
    html_url: "#",
    stargazers_count: 145,
    language: "Solidity",
    homepage: "",
    topics: ["web3", "defi", "smart-contracts"]
  },
  {
    id: 2,
    name: "zk-rollup-exchange",
    description: "Layer 2 decentralized exchange implementation using zero-knowledge proofs for scalability.",
    html_url: "#",
    stargazers_count: 89,
    language: "TypeScript",
    homepage: "",
    topics: ["zkp", "layer2", "ethereum"]
  },
  {
    id: 3,
    name: "nft-marketplace-v2",
    description: "Next-gen NFT marketplace with gas-less listings and royalties enforcement on-chain.",
    html_url: "#",
    stargazers_count: 210,
    language: "JavaScript",
    homepage: "",
    topics: ["nft", "marketplace", "erc721"]
  },
  {
    id: 4,
    name: "hardhat-security-plugins",
    description: "A suite of Hardhat plugins to detect common smart contract vulnerabilities during development.",
    html_url: "#",
    stargazers_count: 56,
    language: "TypeScript",
    homepage: "",
    topics: ["security", "hardhat", "tooling"]
  },
  {
    id: 5,
    name: "cross-chain-bridge",
    description: "Relay nodes and smart contracts facilitating cross-chain asset transfers.",
    html_url: "#",
    stargazers_count: 112,
    language: "Rust",
    homepage: "",
    topics: ["bridge", "interoperability", "blockchain"]
  },
  {
    id: 6,
    name: "dao-governance-framework",
    description: "Modular governance contracts for DAOs supporting quadratic voting and delegation.",
    html_url: "#",
    stargazers_count: 78,
    language: "Solidity",
    homepage: "",
    topics: ["dao", "governance", "web3"]
  }
];

const FALLBACK_USER: GithubUser = {
  public_repos: 42,
  followers: 856,
  following: 12,
};

export function useGithubRepos() {
  return useQuery({
    queryKey: ["github-repos", GITHUB_USERNAME],
    queryFn: async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=10`);
        if (!res.ok) throw new Error("Failed to fetch repos");
        const data = await res.json();
        
        // Filter out forks and take top 6
        const repos = data.filter((repo: any) => !repo.fork).slice(0, 6) as GithubRepo[];
        
        if (repos.length === 0) return FALLBACK_REPOS;
        return repos;
      } catch (error) {
        console.warn("Using fallback repo data due to API error/rate limit:", error);
        return FALLBACK_REPOS;
      }
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}

export function useGithubUser() {
  return useQuery({
    queryKey: ["github-user", GITHUB_USERNAME],
    queryFn: async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        return await res.json() as GithubUser;
      } catch (error) {
        console.warn("Using fallback user data due to API error/rate limit:", error);
        return FALLBACK_USER;
      }
    },
    staleTime: 1000 * 60 * 60,
  });
}
