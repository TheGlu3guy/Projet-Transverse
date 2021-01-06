PGDMP         8                 y            postgres    13.1    13.1 "    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    13442    postgres    DATABASE     d   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'French_France.1252';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3033                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    40960    labels    TABLE     �   CREATE TABLE public.labels (
    description text NOT NULL,
    nom text NOT NULL,
    lien_externe text,
    id_label integer NOT NULL
);
    DROP TABLE public.labels;
       public         heap    postgres    false            �            1259    40966    Labels_idLabel_seq    SEQUENCE     �   CREATE SEQUENCE public."Labels_idLabel_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."Labels_idLabel_seq";
       public          postgres    false    201            �           0    0    Labels_idLabel_seq    SEQUENCE OWNED BY     L   ALTER SEQUENCE public."Labels_idLabel_seq" OWNED BY public.labels.id_label;
          public          postgres    false    202            �            1259    40971    annonces    TABLE     �   CREATE TABLE public.annonces (
    id_user integer NOT NULL,
    description text,
    titre text NOT NULL,
    prix real NOT NULL,
    localisation text NOT NULL,
    id_produit integer NOT NULL,
    quantite real NOT NULL,
    in_kg boolean NOT NULL
);
    DROP TABLE public.annonces;
       public         heap    postgres    false            �            1259    40977 
   producteur    TABLE     W   CREATE TABLE public.producteur (
    id_user integer NOT NULL,
    description text
);
    DROP TABLE public.producteur;
       public         heap    postgres    false            �            1259    40968    producteur_label    TABLE     f   CREATE TABLE public.producteur_label (
    id_label integer NOT NULL,
    id_user integer NOT NULL
);
 $   DROP TABLE public.producteur_label;
       public         heap    postgres    false            �            1259    40983    produits    TABLE     Y   CREATE TABLE public.produits (
    nom text NOT NULL,
    id_produit integer NOT NULL
);
    DROP TABLE public.produits;
       public         heap    postgres    false            �            1259    40989    produits_id_produit_seq    SEQUENCE     �   CREATE SEQUENCE public.produits_id_produit_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.produits_id_produit_seq;
       public          postgres    false    206            �           0    0    produits_id_produit_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.produits_id_produit_seq OWNED BY public.produits.id_produit;
          public          postgres    false    207            �            1259    40991    users    TABLE     �   CREATE TABLE public.users (
    id_user integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    nom text NOT NULL,
    prenom text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    40997    user_idUser_seq    SEQUENCE     �   CREATE SEQUENCE public."user_idUser_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."user_idUser_seq";
       public          postgres    false    208            �           0    0    user_idUser_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."user_idUser_seq" OWNED BY public.users.id_user;
          public          postgres    false    209            @           2604    40999    labels id_label    DEFAULT     s   ALTER TABLE ONLY public.labels ALTER COLUMN id_label SET DEFAULT nextval('public."Labels_idLabel_seq"'::regclass);
 >   ALTER TABLE public.labels ALTER COLUMN id_label DROP DEFAULT;
       public          postgres    false    202    201            A           2604    41000    produits id_produit    DEFAULT     z   ALTER TABLE ONLY public.produits ALTER COLUMN id_produit SET DEFAULT nextval('public.produits_id_produit_seq'::regclass);
 B   ALTER TABLE public.produits ALTER COLUMN id_produit DROP DEFAULT;
       public          postgres    false    207    206            B           2604    41001    users id_user    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN id_user SET DEFAULT nextval('public."user_idUser_seq"'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN id_user DROP DEFAULT;
       public          postgres    false    209    208            �          0    40971    annonces 
   TABLE DATA           p   COPY public.annonces (id_user, description, titre, prix, localisation, id_produit, quantite, in_kg) FROM stdin;
    public          postgres    false    204   F"       �          0    40960    labels 
   TABLE DATA           J   COPY public.labels (description, nom, lien_externe, id_label) FROM stdin;
    public          postgres    false    201   �"       �          0    40977 
   producteur 
   TABLE DATA           :   COPY public.producteur (id_user, description) FROM stdin;
    public          postgres    false    205   �$       �          0    40968    producteur_label 
   TABLE DATA           =   COPY public.producteur_label (id_label, id_user) FROM stdin;
    public          postgres    false    203   @%       �          0    40983    produits 
   TABLE DATA           3   COPY public.produits (nom, id_produit) FROM stdin;
    public          postgres    false    206   ]%       �          0    40991    users 
   TABLE DATA           F   COPY public.users (id_user, email, password, nom, prenom) FROM stdin;
    public          postgres    false    208   �%       �           0    0    Labels_idLabel_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Labels_idLabel_seq"', 3, true);
          public          postgres    false    202            �           0    0    produits_id_produit_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.produits_id_produit_seq', 4, true);
          public          postgres    false    207            �           0    0    user_idUser_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."user_idUser_seq"', 15, true);
          public          postgres    false    209            D           2606    41003    labels Labels_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.labels
    ADD CONSTRAINT "Labels_pkey" PRIMARY KEY (id_label);
 >   ALTER TABLE ONLY public.labels DROP CONSTRAINT "Labels_pkey";
       public            postgres    false    201            F           2606    41005    produits produits_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.produits
    ADD CONSTRAINT produits_pkey PRIMARY KEY (id_produit);
 @   ALTER TABLE ONLY public.produits DROP CONSTRAINT produits_pkey;
       public            postgres    false    206            H           2606    41007    users user_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id_user);
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    208            �   6   x�3�,I-.����
E��
)�
 !���+�K39���z&��%\1z\\\ ��      �   D  x��S�n1������m�nn� �t�"��g:I%;c�ݺ:�qk��ORRv's�g�����-���^Ĉ��L�C'�C��<BL!��C/��b��=t���K�x�w�2t�gȡddpr�'�(�z�
�ږ�h�b20:)�}�d6�JO�/�Y�RD���֔L蓍[�����Η&��&�*�D�����g�܈8�\VXR�J�W����E�0@W^D*�*����*��}��d���ls��y>?y�>�}�I�%��Cل͆ZBǦC��q$��\/������j~��.�ʴG4�TN�ɓ�c����R(�5:�}��$��J�J�as���l�Dmq��͡��a<:��^S�m.X�4X5����?���~�	���XO�u�:�4c���?@k���k�6��q<�BWr;q�6FW/$GO{��j�xD/��~��⹻�4k
.�e�z�Q]ZV���"�^텯~[wZ��οuq�&ٕ�D��#}��ګ��*v��:��Tm݀����
f�M�!e�'G\�b�4�ӯ�ak�$�8w��À������J����
nN������t��A��      �   P   x�3�,I-.�2���24�����24��JU(.�,V(�S(K�KI--RHIU )U�ROL�/JU8�<��Д�(
�b���� �Y'      �      x������ � �      �   /   x���M,I�4�
H,1������,c���̢��RN�=... %j-      �   �   x�]��R�0@�u����C�A����q��؉���+]vq��cM�8=,�@/-F-�$>��/���8����<�ҹl|��>�P5�O�|Ï*H]�%̜+�oU	�h�;�����H'�s���S�SO��3y���o�oIсL�P�*��C���̽�έ\�|Um��E?�N	��y5��W@�O�2}��ǻ� C�n�.��԰��m��2Ri     